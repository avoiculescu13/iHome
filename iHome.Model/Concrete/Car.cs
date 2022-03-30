using iHome;
using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using iHome.Model;
using System.Drawing;

namespace iHome.Model
{
    public class Car : Record
    {
        private List<PeriodicTechnicalRevision> _revisions;
        private List<PeriodicTechnicalInspection> _inspections;
        public Car()
        {
            _revisions = new List<PeriodicTechnicalRevision>();
            _inspections = new List<PeriodicTechnicalInspection>();
        }

        public string UserName { get; set; }
        public CarType Type { get; set; }
        public string Color { get; set; }
        public double CylinderCapacity { get; set; }
        public DateTime ManufactureDate { get; set; }
        public string Brand { get; set; }
        public double Price { get; set; }
        public List<PeriodicTechnicalRevision> TechnicalRevision
        {
            get => _revisions;
        }
        public List<PeriodicTechnicalInspection> TechnicalInspection
        {
            get => _inspections;
        }
    }
}
