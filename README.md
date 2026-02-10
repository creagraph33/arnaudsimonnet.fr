# arnaudsimonnet.fr — Hugo + Decap CMS + Netlify

## Structure du projet

```
arnaudsimonnet.fr/
├── hugo.toml              # Configuration Hugo
├── netlify.toml           # Config déploiement Netlify
├── content/               # Contenu Markdown (géré via Decap CMS)
├── layouts/               # Templates HTML
│   ├── _default/          # Layouts par défaut (baseof, single, list)
│   ├── partials/          # Composants réutilisables (header, footer, head)
│   ├── page/              # Layouts spéciaux (book, bd, about)
│   └── index.html         # Page d'accueil
├── static/
│   ├── admin/             # Decap CMS (index.html + config.yml)
│   ├── css/style.css      # Styles du thème
│   ├── js/main.js         # JavaScript (nav mobile, cookies, animations)
│   └── images/            # Images du site
└── public/                # Dossier généré par Hugo (ne pas committer)
```

## Déploiement — Étapes

### 1. Images à récupérer

Copier depuis le backup wget (`~/n1626027.websitebuilder.online/`) vers `static/images/` :

```
static/images/
├── logo-as.png                    # Logo "AS - L'Imaginaire à ses Étoiles"
├── favicon.png                    # Favicon (créer à partir du logo)
├── og-default.jpg                 # Image Open Graph par défaut
├── lagoon-love-cover.jpg          # Couverture Lagoon Love
├── abysses-stellaires-cover.jpg   # Couverture Les Abysses Stellaires
├── stellar-abyss-cover.jpg        # Couverture The Stellar Abyss
└── lagoon-love/
    ├── planche-01.jpg à planche-06.jpg   # 6 planches BD
```

### 2. Créer le repo GitHub

```bash
cd arnaudsimonnet.fr
git init
git add .
git commit -m "Initial commit — Hugo + Decap CMS"
git remote add origin https://github.com/TON_USER/arnaudsimonnet.fr.git
git push -u origin main
```

### 3. Déployer sur Netlify

1. Aller sur [app.netlify.com](https://app.netlify.com)
2. "Add new site" → "Import an existing project" → GitHub
3. Sélectionner le repo `arnaudsimonnet.fr`
4. Build settings déjà dans `netlify.toml` → Deploy
5. **Activer Netlify Identity** : Site settings → Identity → Enable Identity
6. **Activer Git Gateway** : Identity → Services → Git Gateway → Enable

### 4. Configurer le domaine chez Gandi

Dans Gandi LiveDNS, remplacer les enregistrements DNS :

```
Type    Nom    Valeur
CNAME   www    ton-site.netlify.app.
A       @      75.2.60.5
```

Ou mieux : configurer les **nameservers Netlify** dans Gandi pour que Netlify gère tout le DNS.

Dans Netlify : Domain management → Add custom domain → `arnaudsimonnet.fr`
Netlify générera automatiquement le certificat SSL Let's Encrypt.

### 5. Accéder à l'administration

Aller sur `https://arnaudsimonnet.fr/admin/`
Se connecter avec le compte Netlify Identity.
Tu pourras modifier tout le contenu directement depuis l'interface web.

## Tester en local

```bash
# Installer Hugo : https://gohugo.io/installation/
hugo server -D
# → http://localhost:1313
```

## Notes

- Les textes des extraits (Abysses Stellaires) sont à compléter depuis le site original
- Les pages "Univers Musical", "Charte de référencement", "Conditions d'utilisation" sont en placeholder
- La boutique Ecwid (page Acheter) a été remplacée par des liens directs Amazon/Lulu
- Le formulaire de contact utilise Netlify Forms (gratuit, 100 soumissions/mois)
