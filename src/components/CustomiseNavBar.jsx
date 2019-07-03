import React from 'react';
import {inject, observer} from 'mobx-react';

const CustomiseNavBar = inject('styleStore')(observer(({styleStore})=>
    <div>
        <button onClick={ ()=> styleStore.switchToLightTheme()}>Switch To Light Theme</button>
        <button onClick={ ()=> styleStore.switchToDarkTheme()}>Switch To Dark Theme</button>
    </div>
)
)

export default CustomiseNavBar