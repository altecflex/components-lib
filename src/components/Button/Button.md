### Button themes
```jsx
import { 
    PrimaryButton, 
    SecondaryButton, 
    DangerButton, 
    DefaultButton, 
    ThemeProvider 
} from 'components-lib';

<ThemeProvider>
    <PrimaryButton>Submit</PrimaryButton>
    <SecondaryButton>Cancel</SecondaryButton>
    <DangerButton>Delete</DangerButton>
    <DefaultButton>Default</DefaultButton>
</ThemeProvider>
```

### Responsive button
```jsx
import { PrimaryButton, ThemeProvider } from 'components-lib';

<ThemeProvider>
    <PrimaryButton fullWidth>Responsive</PrimaryButton>
</ThemeProvider>
```

### Button sizes
```jsx
import { PrimaryButton, ThemeProvider } from 'components-lib';

<ThemeProvider>
    <PrimaryButton size='large'>Large button</PrimaryButton>
    <PrimaryButton size='small'>small button</PrimaryButton>
</ThemeProvider>
```

### Link button
```jsx
import { DefaultButton, ThemeProvider } from 'components-lib';

<ThemeProvider>
    <DefaultButton href="https://www.google.com">Google</DefaultButton>
</ThemeProvider>
```

### Icon button
```jsx
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { PrimaryButton, ThemeProvider } from 'components-lib';

<ThemeProvider>
    <PrimaryButton href="https://www.google.com">
        Google
        <Icon icon={faExternalLinkAlt} size="lg" className="margin-left-8" />
    </PrimaryButton>
</ThemeProvider>
```