using Microsoft.AspNetCore.Mvc;
using LabX.DTOs;
using LabX.Models;
using LabX.Services;
using System;

namespace LabX.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly AuthService _authService = new AuthService();

        [HttpPost("register")]
        public IActionResult Register([FromBody] RegisterDto dto)
        {
            if (_authService.GetUserByEmail(dto.Email) != null)
                return BadRequest(new { message = "Email already exists" });

            var user = new User
            {
                Id = new Random().Next(1, 1000),
                Name = dto.Name,
                Email = dto.Email,
                PasswordHash = _authService.HashPassword(dto.Password),
                CreatedAt = DateTime.Now
            };

            _authService.Register(user);
            return Ok(new { message = "User registered successfully" });
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginDto dto)
        {
            var user = _authService.GetUserByEmail(dto.Email);
            if (user == null || !_authService.VerifyPassword(dto.Password, user.PasswordHash))
                return Unauthorized(new { message = "Invalid email or password" });

            return Ok(new { token = $"fake-jwt-{user.Id}-auth", userId = user.Id });
        }
    }
}
