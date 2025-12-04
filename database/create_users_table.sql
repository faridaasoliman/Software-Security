-- Step 1: Create Users table
CREATE TABLE Users (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(50),
    Email NVARCHAR(100) UNIQUE,
    PasswordHash NVARCHAR(200),
    CreatedAt DATETIME DEFAULT GETDATE()
);
