const httpProcessor = require('../HttpProcessor');
const services = require('../config/services');
const constants = require('../config/constants');

class Appruve
{
    constructor() {
        this.client = services.appruve.client;
        this.apiKey = services.appruve.api_key;
        this.baseUrl = services.appruve.api_url;

    }

    /**
    * Process axios calls
    * 
    * @param {string} method The call method get|post|put|delete|patch
    * @param {string} url The url to call
    * @param {object|formData} payload The payload data to send with the call
    */
    process(method, url, payload) {
         //HttpProcessor class to handle axios calls
        let processor = new httpProcessor(this.baseUrl, this.apiKey, this.client);
        
        return processor.process(method, url, payload)
    }

    /**
    * Handles the ID request
    *
    * @param {object} IdFilter
    * @return {object}
    */
    async handle(IdFilter)
    {
        if (!IdFilter.isSuccessful()) {
            
            const idType = IdFilter.getIDType().toUpperCase();
            const country=IdFilter.getCountry().toLowerCase();
            const type = this.getType(idType);
            const url = '/v1/verifications/' + country + '/' + type;
            
            const idNumber =  IdFilter.getIDNumber();
            const firstName =  IdFilter.getFirstName();
            const lastName =  IdFilter.getLastName();
            const middleName =  IdFilter.getMiddleName();
            const dateOfBirth =  IdFilter.getDOB();
            const phone =  IdFilter.getPhoneNumber();
            const expiryDate =  IdFilter.getExpiry();
            const gender =  IdFilter.getGender();
            const address =  IdFilter.getAddress();
            const pin =  IdFilter.getPin();
            const tin =  IdFilter.getTin();
            const full_name =  IdFilter.getFullName();
            const company = IdFilter.getCompany();
            const registration_number =  IdFilter.getRegistrationNumber();

            const body = {
                'id' : idNumber,
                'first_name' : firstName,
                'last_name' : lastName,
                'middle_name' : middleName,
                'date_of_birth' : dateOfBirth,
                'phone_number' : phone,
                'expiry_date' : expiryDate,
                'gender' : gender,
                'address' : address,
                'pin' : pin,
                'tin' : tin,
                'full_name' : full_name,
                'company_name' : company,
                'registration_number' : registration_number
            };
            
            try {
                const response = await this.process('POST', url, body);

                IdFilter.confirmSuccess();
                
                IdFilter.setHandler(this.client);

                IdFilter.setData({
                    'handler' : IdFilter.getHandler(),
                    'country' : IdFilter.getCountry().toUpperCase(),
                    'message' : idType + ' Verified' + ' Successfully',
                    'data' : response
                });

                return IdFilter.getData();
                
            } catch (error) {
                IdFilter.setError({'error' : error});
                
                return IdFilter.getError();
            }
        }

    }

    /**
     * Transform the ID
     *
     * @param {string} type
     * @return {string}
     */
    getType(type)
    {
        if (type === constants.idValues.TYPE_NATIONAL_ID  || type === constants.idValues.TYPE_NIN ) {
            return 'national_id';
        }
        if (type === constants.idValues.TYPE_DRIVERS_LICENSE) {
            return 'driver_license';
        }
        if (type === constants.idValues.TYPE_VOTER_CARD) {
            return 'voter';
        }
        if (type === constants.idValues.TYPE_BVN) {
            return 'bvn';
        }
        if (type === constants.idValues.TELCO_SUBSCRIBER) {
            return 'telco_subscriber';
        }
        return type.toLowerCase();
    }
}

module.exports = Appruve;