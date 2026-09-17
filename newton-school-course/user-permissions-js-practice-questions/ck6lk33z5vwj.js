function assignAccess(featureAccess, fallbackAccess, checkPermissions, userId) {
  // Check user permissions
  const hasPermission = checkPermissions(userId);

  // If user has permission, call featureAccess and return its result
  if (hasPermission) {
    return featureAccess(userId);
  } else {
    // Otherwise, call fallbackAccess and return its result
    return fallbackAccess(userId);
  }
}