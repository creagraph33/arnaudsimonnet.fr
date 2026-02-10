import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "accueil",
        label: "Accueil",
        path: "content",
        match: { include: "_index" },
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Titre", required: true },
          { type: "string", name: "description", label: "Description SEO" },
          { type: "rich-text", name: "body", label: "Contenu", isBody: true },
        ],
      },
      {
        name: "lagoon_love",
        label: "Lagoon Love",
        path: "content",
        match: { include: "lagoon-love" },
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Titre", required: true },
          { type: "string", name: "description", label: "Description SEO" },
          { type: "string", name: "layout", label: "Layout" },
          { type: "string", name: "subtitle", label: "Sous-titre" },
          { type: "image", name: "cover", label: "Image de couverture" },
          { type: "string", name: "accroche", label: "Accroche", ui: { component: "textarea" } },
          { type: "string", name: "lien_achat", label: "Lien achat" },
          { type: "string", name: "section_titre", label: "Titre section principale" },
          { type: "string", name: "section_sous_titre", label: "Sous-titre section" },
          {
            type: "object",
            name: "planches",
            label: "Planches BD",
            list: true,
            fields: [
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "legende", label: "Legende" },
            ],
          },
          { type: "rich-text", name: "body", label: "Contenu", isBody: true },
        ],
      },
      {
        name: "abysses_stellaires",
        label: "Les Abysses Stellaires",
        path: "content",
        match: { include: "les-abysses-stellaires" },
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Titre", required: true },
          { type: "string", name: "description", label: "Description SEO" },
          { type: "string", name: "layout", label: "Layout" },
          { type: "string", name: "subtitle", label: "Sous-titre" },
          { type: "image", name: "cover", label: "Couverture" },
          { type: "string", name: "accroche", label: "Accroche", ui: { component: "textarea" } },
          { type: "string", name: "editeur", label: "Editeur" },
          { type: "string", name: "prix", label: "Prix" },
          { type: "string", name: "pages", label: "Nombre de pages" },
          { type: "string", name: "format", label: "Format" },
          { type: "string", name: "isbn", label: "ISBN" },
          { type: "string", name: "lien_achat", label: "Lien achat" },
          { type: "string", name: "lien_musique", label: "Lien univers musical" },
          { type: "string", name: "youtube_id", label: "ID video YouTube" },
          {
            type: "object",
            name: "piliers",
            label: "Piliers",
            list: true,
            fields: [
              { type: "string", name: "icon", label: "Icone (emoji)" },
              { type: "string", name: "titre", label: "Titre" },
              { type: "string", name: "texte", label: "Texte", ui: { component: "textarea" } },
            ],
          },
          {
            type: "object",
            name: "extraits",
            label: "Extraits",
            list: true,
            fields: [
              { type: "string", name: "titre", label: "Titre" },
              { type: "rich-text", name: "texte", label: "Texte" },
            ],
          },
          { type: "rich-text", name: "body", label: "Contenu principal", isBody: true },
        ],
      },
      {
        name: "stellar_abyss",
        label: "The Stellar Abyss",
        path: "content",
        match: { include: "the-stellar-abyss" },
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Title", required: true },
          { type: "string", name: "description", label: "SEO Description" },
          { type: "string", name: "layout", label: "Layout" },
          { type: "string", name: "subtitle", label: "Subtitle" },
          { type: "image", name: "cover", label: "Cover image" },
          { type: "string", name: "accroche", label: "Tagline", ui: { component: "textarea" } },
          { type: "string", name: "editeur", label: "Publisher" },
          { type: "string", name: "prix", label: "Price" },
          { type: "string", name: "pages", label: "Pages" },
          { type: "string", name: "format", label: "Format" },
          { type: "string", name: "isbn", label: "ISBN" },
          { type: "string", name: "lien_achat", label: "Buy link" },
          {
            type: "object",
            name: "piliers",
            label: "Pillars",
            list: true,
            fields: [
              { type: "string", name: "icon", label: "Icon (emoji)" },
              { type: "string", name: "titre", label: "Title" },
              { type: "string", name: "texte", label: "Text", ui: { component: "textarea" } },
            ],
          },
          { type: "rich-text", name: "body", label: "Content", isBody: true },
        ],
      },
      {
        name: "a_propos",
        label: "A propos",
        path: "content",
        match: { include: "a-propos" },
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Titre", required: true },
          { type: "string", name: "description", label: "Description SEO" },
          { type: "string", name: "layout", label: "Layout" },
          { type: "rich-text", name: "body", label: "Contenu", isBody: true },
        ],
      },
      {
        name: "univers_musical",
        label: "Univers Musical",
        path: "content",
        match: { include: "univers-musical" },
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Titre", required: true },
          { type: "rich-text", name: "body", label: "Contenu", isBody: true },
        ],
      },
      {
        name: "acheter",
        label: "Acheter",
        path: "content",
        match: { include: "acheter" },
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Titre", required: true },
          { type: "rich-text", name: "body", label: "Contenu", isBody: true },
        ],
      },
      {
        name: "dossier_presse",
        label: "Dossier de presse",
        path: "content",
        match: { include: "dossier-de-presse" },
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Titre", required: true },
          { type: "rich-text", name: "body", label: "Contenu", isBody: true },
        ],
      },
      {
        name: "mentions_legales",
        label: "Mentions legales",
        path: "content",
        match: { include: "mentions-legales" },
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Titre", required: true },
          { type: "rich-text", name: "body", label: "Contenu", isBody: true },
        ],
      },
      {
        name: "politique_confidentialite",
        label: "Politique de confidentialite",
        path: "content",
        match: { include: "politique-de-confidentialite" },
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Titre", required: true },
          { type: "rich-text", name: "body", label: "Contenu", isBody: true },
        ],
      },
      {
        name: "charte_referencement",
        label: "Charte de referencement",
        path: "content",
        match: { include: "charte-de-referencement" },
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Titre", required: true },
          { type: "rich-text", name: "body", label: "Contenu", isBody: true },
        ],
      },
      {
        name: "post",
        label: "Articles de blog",
        path: "content/posts",
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Titre", isTitle: true, required: true },
          { type: "rich-text", name: "body", label: "Contenu", isBody: true },
        ],
      },
    ],
  },
});
