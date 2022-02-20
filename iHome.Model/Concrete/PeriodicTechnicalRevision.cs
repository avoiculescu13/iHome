using iHome.Model;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace iHome.Model
{
    public class PeriodicTechnicalRevision : Record
    {
        public PeriodicTechnicalRevision()
        {
            Id = Guid.NewGuid();
        }

        public DateTime Date { get; set; }
        public string Notes { get; set; }
        public double Price { get; set; }
        public int Kilometers { get; set; }
        public string ServiceGarage { get; set; }
    }
}
