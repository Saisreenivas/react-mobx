import { observable, action
    // , useStrict 
} from 'mobx';

// useStrict(true);

class StyleStore{

    /**
     * Application Bar Styles
     */
    @observable applicationBarStyle = {
        height: 5,
        padding: 15,
        backgroundColor: '#303030',
        color: '#ffffff'
    }

    /**
     * UI Handle to change theme to dark
     */
    @action switchToDarkTheme(){
        this.applicationBarStyle = {
            ...this.applicationBarStyle,
            backgroundColor: '#303030',
            color: '#ffffff'
        }
    }

    /**
     * UI Handle to change theme to light
     */
    @action switchToLightTheme(){   
        this.applicationBarStyle = {
            ...this.applicationBarStyle,
            backgroundColor: '#EEEEEE',
            color: '#333333'
        }
    }
}

export default StyleStore;