-- Step 3: Backend queries

-- Get user by email
SELECT * FROM Users WHERE Email = @Email;

-- Insert new user
INSERT INTO Users (Name, Email, PasswordHash)
VALUES (@Name, @Email, @PasswordHash);
