using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TravelBlog.Models
{
    [Table("Destinations")]
    public class Destination
    {
        [Key]
        public int DestinationId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Score { get; set; }
    }
}
