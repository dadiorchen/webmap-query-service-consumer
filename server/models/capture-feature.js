const { Repository } = require('./Repository');

const captureFeatureFromMessage = ({
    id,
    lat,
    lon,
    field_user_id,
    field_username,
    device_identifier,
    attributes = [],
    species_name,
    created_at,
    ...additionalParameters
 }) => {

    Object.keys(additionalParameters).forEach((key) => {
        attributes.push( { [key]: additionalParameters[key] });
    });

    return Object.freeze({
     id,
     lat,
     lon,
     field_user_id,
     field_username,
     device_identifier,
     attributes: { entries: attributes },
     species_name,
     created_at
  });
}

const createCaptureFeature = (captureFeatureRepo) => (async captureFeature => {
    const repository = new Repository(captureFeatureRepo);
    repository.add(captureFeature);
});

module.exports = { captureFeatureFromMessage, createCaptureFeature };
