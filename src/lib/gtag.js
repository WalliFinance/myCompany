export const measurementId = 'G-2RW4KC3BJP'


export const pageview = url => {
    window.gtag("config", measurementId, {
      page_path: url,
    });
  };
  
  export const event = ({ action, category, label, value ,page_location}) => {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
      page_location: page_location
    });
  };