# SecureURL Pro – Backend API Contract

## Auth
POST /auth/login
Request: { email, password }
Response: { token, user }

POST /auth/register
Request: { name, email, password }

## User
GET /user/profile
Response: { id, name, email, scan_credits, reward_points }

## Scan
POST /scan
Request: { url }
Response: { scan_id, url, risk_level, verdict, confidence }

## Rewards
POST /rewards/convert
Request: { points }

## Headers
Authorization: Bearer <JWT_TOKEN>