## 🚀 Project Deployment & Monitoring

This MERN stack application is deployed with full CI/CD automation using GitHub Actions, Render, and Vercel.

### ✅ Backend

- **Platform**: Render  
- **Live URL**: [Backend API](https://week-7-devops-deployment-assignment-dnr6.onrender.com)  
- **Health Check Endpoint**: `/api/health`

> If the health check fails with a 404 error, make sure to add this route in your Express backend:
>
> ```js
> app.get('/api/health', (req, res) => {
>   res.status(200).json({ status: 'ok' });
> });
> ```

---

### ✅ Frontend

- **Platform**: Vercel  
- **Live URL**: [Frontend App](https://week-7-devops-deployment-assignment-liart.vercel.app)

---

### 🛠️ CI/CD Setup

CI/CD is configured using GitHub Actions with the following stages:

1. **Linting & Testing** – Backend & frontend code are linted and tested.  
2. **Build Artifacts** – Frontend build artifacts are uploaded.  
3. **Deployment** – Backend is deployed to Render, frontend to Vercel.  
4. **Monitoring** – Health checks are run against both URLs after deployment.
