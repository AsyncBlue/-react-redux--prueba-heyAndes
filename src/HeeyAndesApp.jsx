import { Provider } from 'react-redux'
import { NextUIProvider } from '@nextui-org/react';
import { store } from './store/store';
import { AppRouter } from './routers/AppRouter';

export const HeeyAndesApp = () => {
    return (
      <Provider store={ store }>
        <NextUIProvider>
          <AppRouter />
        </NextUIProvider>
      </Provider>
    )
}
