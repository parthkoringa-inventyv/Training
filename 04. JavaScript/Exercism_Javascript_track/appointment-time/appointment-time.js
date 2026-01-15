// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = undefined) {
  let currentDate;
  if(now === undefined)
  {
     now = Date.now();
  }
  currentDate = new Date(now);
  currentDate.setDate(currentDate.getDate()+days);
  return currentDate;
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
  return appointmentDate.toISOString();
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
  const inp = new Date(timestamp);
  return { year: inp.getFullYear(), month: inp.getMonth(), date: inp.getDate(), hour: inp.getHours(), minute: inp.getMinutes()};
}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {
  const d1 = new Date(timestamp);
  for(const key in options)
    {
      switch(key){
        case "year": d1.setFullYear(options[key]); break;
        case "month": d1.setMonth(options[key]); break;
        case "date": d1.setDate(options[key]); break;
        case "hour": d1.setHours(options[key]); break;
        case "minute": d1.setMinutes(options[key]); break;
      }
    }
  let record = getAppointmentDetails(d1.toString());
  return record;
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
  return Math.ceil(Math.abs((new Date(timestampA))-(new Date(timestampB)))/1000);
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  return (new Date(appointmentTimestamp) > new Date(currentTimestamp)) ? true : false;
  
}
