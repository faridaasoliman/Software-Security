-- Step 2: Insert test user
-- Replace 'HASHED_PASSWORD_HERE' with actual SHA256 hash
INSERT INTO Users (Name, Email, PasswordHash)
VALUES ('Test User', 'test@test.com', 'HASHED_PASSWORD_HERE');
