import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { MeuContextoProvider } from '../FlowerExperience_FrontEnd/src/pages/Contexto/index.js';

import Feed from "./src/pages/Feed";
import Favoritos from "./src/pages/Favoritos";
import Perfil from "./src/pages/Perfil";
import Login from "./src/pages/Login";
import Cadastro from "./src/pages/Cadastro";
import Administrador from "./src/pages/Administrador";
import Adicionar from "./src/pages/Adicionar";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <MeuContextoProvider>

      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            options={{
              title: '',
              headerShown: false,
            }}
            
            name="Login" component={Login} />
            <Stack.Screen
            options={{
              title: '',
              headerShown: false,
            }}

            name="Perfil" component={Perfil} />
          <Stack.Screen
            options={{
              title: '',
              headerShown: false,
            }}
            name="Feed" component={Feed} />
          <Stack.Screen
            options={{
              title: '',
              headerShown: false,
            }}
            name="Favoritos" component={Favoritos} />
          
          <Stack.Screen
            options={{
              title: '',
              headerShown: false,
            }}
            name="Cadastro" component={Cadastro} />
          <Stack.Screen
            options={{
              title: '',
              headerShown: false,
            }}
            name="Administrador" component={Administrador} />
          <Stack.Screen
            options={{
              title: '',
              headerShown: false,
            }}
            name="Adicionar" component={Adicionar} />
        </Stack.Navigator>
      </NavigationContainer>


    </MeuContextoProvider>
  )
} 