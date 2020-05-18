export const zipcodeDetailsService = (request) => {
    const ZIPCODE_API_ENDPOINT = 'https://cors-anywhere.herokuapp.com/http://lms.labyrinthelab.com/api/ws_get_zipcode_details.php?zipcode=33186';
   
    let parameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'access_token': 'ZiPcoDeDetAiLs',
        
      },
      
    };
  
    return fetch(ZIPCODE_API_ENDPOINT,parameters)
      .then(response => {
        
        return response.json();
      })
      .then(json => {
        return json;
      });
  };