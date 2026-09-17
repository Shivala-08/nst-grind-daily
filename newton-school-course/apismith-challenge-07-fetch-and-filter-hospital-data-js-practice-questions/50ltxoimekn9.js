async function getHospitalsWithAvailability(api, specialization, minBeds) {
  try {
    const response = await fetch(api);
    const data = await response.json();
    
    // Assuming the data is an array of hospital objects or an object containing an array (like data.hospitals)
    // Adjust according to the typical structure, e.g., data.hospitals or data directly:
    const hospitals = Array.isArray(data) ? data : (data.hospitals || []);
    
    const filteredHospitals = hospitals.filter(hospital => {
      // Check if specialization matches and available beds meet the minimum requirement
      const matchesSpecialization = Array.isArray(hospital.specialization) 
        ? hospital.specialization.includes(specialization)
        : hospital.specialization === specialization;
        
      const hasEnoughBeds = hospital.availableBeds >= Number(minBeds);
      
      return matchesSpecialization && hasEnoughBeds;
    });
    
    return filteredHospitals.map(hospital => hospital.name);
  } catch (error) {
    console.error("Error fetching or processing hospital data:", error);
    return [];
  }
}