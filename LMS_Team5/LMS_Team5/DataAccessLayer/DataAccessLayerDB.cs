using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LMS_Team5.Model;

namespace LMS_Team5.DataAccessLayer
{
    public class DataAccessLayerDB:DbContext
    {
        public DataAccessLayerDB(DbContextOptions<DataAccessLayerDB> options) : base(options)
        {

        }
        //This is Employee Table Db
        public DbSet<EmployeeDB> employees { get; set; }
        //This is Manager Table Db
        public DbSet<ManagerDB> managers { get; set; }
        //This is Leave Details Db
        public DbSet<LeaveDetailsDB> leaveDetails { get; set; }
     
    
    }
}
