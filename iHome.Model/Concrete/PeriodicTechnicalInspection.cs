using iHome.Model;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace iHome.Model
{
    public class PeriodicTechnicalInspection : Record
    {
        public PeriodicTechnicalInspection()
        {
            Id = Guid.NewGuid();
        }

        public bool Passed { get; set; }
        public int Kilometers { get; set; }
        public string Notes { get; set; }
        public string ServiceGarage { get; set; }
        public double Price { get; set; }
        public DateTime Date { get; set; }
    }
}
