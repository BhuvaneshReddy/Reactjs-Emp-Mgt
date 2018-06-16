import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('Reducer', () => {
  it('should add course when passed CREATE_COURSE_SUCCESS', () => {
    // arrange
    const initialState = {
      registerFormState: {
        username: "",
        password: "",
        firstname: "",
        lastname: "",
        email:"",
        mobilenumber:"",
        gender:"",
        dob:"",
        city:"",
        state:"",
        pincode:""
      },
      loginFormState: {
        username: '',
        password: '',
        email:''
      },
      addProfileFormState:{
        firstName:'',
        lastName:'',
        project:'',
        releaseDate:'',
        primarySkills:'',
        secondarySkills:'',
        yearsOfExperience:'',
        trainings:'',
        qualification:'',
        mobileNo:'',
        email:''
      },
      updateProfileFormState:{
        email:'',
        firstName:'',
        lastName:'',
        project:'',
        releaseDate:'',
        primarySkills:'',
        secondarySkills:'',
        yearsOfExperience:'',
        trainings:'',
        qualification:'',
        mobileNo:'',
      },
    
      profileData: [],
      
      currentlySending: false,
      loggedIn: loggedIn(),
      errorMessage: '',
      isOpenAddRecord: false,
      isOpenUpdateRecord: false,
      isOpenDeleteRecord: false,
      searchField:'',
      isRecordSelected:false,
    
      fileUpload: {
      sheets:[],
      names:[],
      curSheetIndex :0
      },
    
     baseSkillData: [],
     resourceSkillData: []
    };

    const newbaseskillstate={
      cognos:'6',
      java:'5'
    }

    const action = setBaseSkillData(newState);

    //act
    const newState = courseReducer(initialState, action);

    //assert
    expect(newState.baseSkillData.length).toEqual(2);
    expect(newState.baseSkillData[0].title).toEqual('6');
    expect(newState.baseSkillData[1].title).toEqual('5');
  });

  });

