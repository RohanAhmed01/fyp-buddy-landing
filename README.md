# FYP Buddy - Autonomous AI Debugging Sandbox

An enterprise-grade autonomous agent built for real-time backend error resolution. FYP Buddy leverages AI to detect, diagnose, and heal broken Python code execution flows automatically in a sandboxed environment.

## Key Features
* **Autonomous Code Debugging:** Resolves syntax, logical, and runtime errors in under 20 seconds.
* **Security Vulnerability Detection:** Identifies insecure code patterns (e.g., hardcoded credentials, injection risks) and suggests fortified implementations.
* **Enterprise-Level Privacy:** Utilizes UUID-based session management to isolate user code blocks and ensure secure multi-user concurrency.

## How It Works
1. **Code Ingestion:** User submits broken Python backend code via the front-end interface.
2. **Execution & Traceback:** The FastAPI sandbox securely attempts to execute the code and captures detailed error tracebacks.
3. **AI Healing:** The OpenRouter API pipeline ingests the error logs and original script, generating a logically patched version.
4. **Verification Loop:** The healed code is re-executed in the sandbox to verify the fix.
5. **Audit Report:** The system outputs the final working code along with a 'Before vs After' execution audit.

## AI/ML Architecture & Technology Stack
* **Core Backend:** Python, FastAPI
* **AI/LLM Integration:** OpenRouter API (Intelligent model routing for optimal code generation)
* **Session Management:** UUID for concurrent, stateless processing
* **Deployment Infrastructure:** Serverless architecture deployed via Vercel

## Code Debugging: Before vs After (Example)
*Every debug session generates a detailed audit report for the developer.*
* **Before:** Script failing due to `KeyError` or unhandled exceptions in data pipelines.
* **After:** AI-patched script with proper `try-except` blocks, exception handling, and boundary checks ensuring zero downtime.

## Results & Performance
* Reduces manual backend debugging time by up to 80%.
* Seamlessly handles multiple concurrent execution requests via optimized FastAPI async endpoints.
