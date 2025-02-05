export function timeSinceLaunch(launchDateStr) {
  const launchDate = new Date(launchDateStr);
  const currentDate = new Date();

  // Difference in milliseconds
  const diffMs = currentDate - launchDate;

  // Convert to different units
  const diffYears = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365.25));
  const diffMonths = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 30.44));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

  // Return appropriate format
  if (diffYears > 0) {
    return `${diffYears} year${diffYears > 1 ? "s" : ""} ago`;
  } else if (diffMonths > 0) {
    return `${diffMonths} month${diffMonths > 1 ? "s" : ""} ago`;
  } else if (diffDays > 0) {
    return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
  } else {
    return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
  }
}
