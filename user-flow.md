# 🔄 Flujo de Usuario - prompto (Chatbot RAG Generator)

## 1. 📄 Carga de conocimiento

- El usuario puede cargar diferentes tipos de contenido:
  - Archivos: `.pdf`, `.docx`, `.txt`, `.csv`
  - Texto libre pegado directamente
  - Links o wikis (futuro: Notion, Drive)
- Los documentos se procesan automáticamente:
  - Se fragmentan ("chunking")
  - Se vectorizan
  - Se indexan en Pinecone

---

## 2. ⚙️ Configuración del chatbot

- El usuario personaliza su bot:
  - Nombre y avatar
  - Tono de respuesta (formal, informal, técnico, amigable)
  - Idioma por defecto
  - Prompt base / sistema ("actuá como un experto en X")
  - Temperatura del modelo (creatividad vs precisión)
  - Permitir o no alucinar (responder fuera de los documentos)

---

## 3. 🤖 Interacción con el bot

- El usuario prueba su chatbot en un entorno tipo chat:
  - Puede hacer preguntas en lenguaje natural
  - Ver respuestas generadas con contexto (RAG)
  - Opción de marcar respuestas como útiles o incorrectas

---

## 4. 🌍 Publicación y distribución

- El usuario decide cómo compartir su bot:
  - Link público
  - Código para embeber en su sitio
  - integración con WhatsApp, Slack, etc.

---

## 5. 📊 Visualización de uso e insights

- Panel básico con métricas:
  - Cantidad de preguntas respondidas
  - Preguntas frecuentes
  - Interacciones exitosas / fallidas
  - Feedback del usuario final

---

## 🔁 Flujo resumido en 3 pasos:

1. Subí tus documentos
2. Configurá tu asistente
3. Compartilo o usalo donde quieras

---
