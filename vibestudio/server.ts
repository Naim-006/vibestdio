import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for AI Palette Generation
  app.post("/api/generate-palette", async (req, res) => {
    try {
      const { description } = req.body;
      const ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY || "",
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      const prompt = `
        Generate a cohesive, accessible and professional UI color palette for a mobile app.
        Concept: "${description}".
        
        The palette should follow modern design principles (60-30-10 rule).
        Ensure text has enough contrast against surface and background.
      `;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              name: { type: Type.STRING, description: "Descriptive name for the theme" },
              primary: { type: Type.STRING, description: "Primary brand color (hex)" },
              secondary: { type: Type.STRING, description: "Secondary support color (hex)" },
              accent: { type: Type.STRING, description: "High-contrast accent color (hex)" },
              background: { type: Type.STRING, description: "Main app background (hex, usually very light or very dark)" },
              surface: { type: Type.STRING, description: "Card/surface background (hex)" },
              text: { type: Type.STRING, description: "Primary text color (hex)" },
              muted: { type: Type.STRING, description: "Secondary/muted text color (hex)" },
            },
            required: ["name", "primary", "secondary", "accent", "background", "surface", "text", "muted"]
          }
        }
      });
      
      const text = response.text || "{}";
      res.json(JSON.parse(text));
    } catch (error) {
      console.error("AI Generation Error:", error);
      res.status(500).json({ error: "Failed to generate palette" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
