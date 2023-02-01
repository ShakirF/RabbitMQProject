namespace RabbitMQProject.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Message { get; set; }
        public string ConnectionId { get; set; } = null;
    }
}
