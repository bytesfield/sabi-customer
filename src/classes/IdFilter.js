
class IdFilter {

    constructor (
        country,
        idType,
        idNumber=null,
        firstName=null,
        lastName=null,
        middleName=null,
        dob=null,
        phoneNumber=null,
        pin=null,
        tin=null,
        gender=null,
        full_name=null,
        user_id=null,
        company=null,
        expiry=null,
        address=null,
        identificationProof=null,
        faceProof=null,
        data= [],
        success=false,
        error=[],
        withImage=false,
        handler='',
        credequityProfile={}
        
    ){
        this.country = country;
        this.idType = idType;
        this.idNumber = idNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
        this.dob = dob;
        this.phoneNumber = phoneNumber;
        this.pin = pin;
        this.tin = tin;
        this.gender = gender;
        this.full_name = full_name;
        this.userId = user_id,
        this.company = company
        this.expiry = expiry;
        this.address = address;
        this.identificationProof = identificationProof;
        this.faceProof = faceProof;
        this.data= data;
        this.success=success;
        this.error=error;
        this.withImage=withImage;
        this.handler=handler;
        this.credequityProfile=credequityProfile;
        

    }

    getIDNumber()
    {
        return this.idNumber;
    }
    getCountry()
    {
        return this.country;
    }
    getCompany()
    {
        return this.company;
    }
    getFullName()
    {
        return this.full_name;
    }
    getIDType()
    {
        return this.idType;
    }
    getPin()
    {
        return this.pin;
    }
    getTin()
    {
        return this.tin;
    }
    getFirstName()
    {
        return this.firstName;
    }
    getMiddleName()
    {
        return this.middleName;
    }

    getLastName()
    {
        return this.lastName;
    }

    getGender()
    {
        return this.gender;
    }
    getAddress()
    {
        return this.address;
    }
    getExpiry()
    {
        return this.expiry;
    }
    getDOB()
    {
        return this.dob;
    }

    getIdentificationProof()
    {
        return this.identificationProof;
    }

    getFaceProof()
    {
        return this.faceProof;
    }

    setWithImage()
    {
        this.withImage=true;
    }

    isWithImage()
    {
        return this.withImage;
    }

    setCredequityProfile(nin, frscno, bvn)
    {
        this.credequityProfile = {'nin' : nin, 'frscno' : frscno, 'bvn' : bvn };
    }

    getCredequityProfile()
    {
        return this.credequityProfile;
    }

    /**
     * returns user phone
     *
     * @return string|null
     */
    getPhoneNumber()
    {
        return this.phoneNumber;
    }

    /**
     * returns the user id
     *
     * @return string
     */
    getUserId()
    {
        return this.userId;
    }
    /**
     * sets the success to true
     *
     * @return void
     */
    confirmSuccess()
    {
        this.success=true;
    }

    /**
     * sets the pipe that handleld the request
     *
     * @param string $handler
     * @return void
     */
    setHandler(handler)
    {
        this.handler=handler;
    }

    /**
     * gets the pipe that hanlded the request
     *
     * @return string
     */
    getHandler()
    {
        return this.handler;
    }

    /**
     * sets data returned from the request
     *
     * @param array $data
     * @return void
     */
    setData(data = {})
    {
        this.data=data;
    }

    /**
     * sets the error associated with request
     *
     * @param array $error
     * @return void
     */
    setError(error = [])
    {
        this.error=error;
    }

    /**
     * return error associated with request
     *
     * @return string
     */
    getError()
    {
        return this.error['error'];
    }

    /**
     * returns the data gotten from the request
     *
     * @return array
     */
    getData()
    {
        return this.data;
    }

    /**
     * checks if the request is successful
     *
     * @return boolean
     */
    isSuccessful()
    {
        return this.success;
    }

}

module.exports = IdFilter;