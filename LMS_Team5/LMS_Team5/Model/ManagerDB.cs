using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LMS_Team5.Model
{
    public class ManagerDB
    {
        [Key]
        public int Man_Id { get; set; }
        public string Man_Name { get; set; }
        public string Man_Email { get; set; }
        public string Password { get; set; }
        public long Man_Phone { get; set; }
        
    }
}
