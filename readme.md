# Mago technical use case

We are building an app that allows to upload videos into projects.

You are building the first feature about video thumbnails.

## 🎯 Your mission

You need to be able to:

- display the existing projects
- select one project and display the associated thumbnails
- upload a thumbnail into an existing project
- delete a thumbnail
- create tests

## 💡 Precisions

- You can clone the project and push your code on a public repo that you can share with us at the end of the exercise
- We don’t have any design ready. You need to make it look as good as possible in the given timeframe
- You need to embrace a pragmatic mindset.

## 🏁 Getting Started

```bash
# Start the database
docker-compose up -d

# Install dependencies
npm install

# Setup environment
cp .env.example .env

# Migrate and seed database
npx prisma migrate reset

# Start development server
npm run dev

# Open app
open http://localhost:3000
```

## 🤝 TIPS

- If you want to add anything to the project, feel free to add your touch! 💅
- You can access your DB content by running the command `npx prisma studio`
# thumbnails
