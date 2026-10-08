import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar as RNStatusBar,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { ThemeProvider, useTheme } from './src/theme/ThemeContext';
import { LanguageProvider, useLanguage } from './src/localization/LanguageContext';
import { AuthProvider } from './src/context/AuthContext';
import { HealthProvider } from './src/context/HealthContext';
import AppHeader from './src/components/AppHeader';

import HomeScreen from './src/screens/HomeScreen';
import FitnessScreen from './src/screens/FitnessScreen';
import HealthcareScreen from './src/screens/HealthcareScreen';
import NutritionScreen from './src/screens/NutritionScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import FloatingMusicPlayer from './src/components/FloatingMusicPlayer';

function MainAppContent() {
  const [activeTab, setActiveTab] = useState('home');
  const { theme, isDarkMode } = useTheme();
  const { t } = useLanguage();
  const insets = useSafeAreaInsets();

  const tabs = [
    {
      id: 'home',
      label: t('navHome'),
      iconActive: 'home',
      iconInactive: 'home-outline',
    },
    {
      id: 'fitness',
      label: t('navFitness'),
      iconActive: 'barbell',
      iconInactive: 'barbell-outline',
    },
    {
      id: 'healthcare',
      label: t('navHealth'),
      iconActive: 'heart',
      iconInactive: 'heart-outline',
    },
    {
      id: 'nutrition',
      label: t('navNutrition'),
      iconActive: 'restaurant',
      iconInactive: 'restaurant-outline',
    },
    {
      id: 'settings',
      label: t('navSettings'),
      iconActive: 'settings',
      iconInactive: 'settings-outline',
    },
  ];

  const renderActiveScreen = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen />;
      case 'fitness':
        return <FitnessScreen />;
      case 'healthcare':
        return <HealthcareScreen />;
      case 'nutrition':
        return <NutritionScreen />;
      case 'settings':
        return <SettingsScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <View
      style={[
        styles.mainContainer,
        {
          backgroundColor: theme.background,
          paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight || 0 : insets.top,
        },
      ]}
    >
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />

      {/* Persistent App Header with Logo & Brand */}
      <AppHeader />

      {/* Screen View */}
      <View style={styles.screenContainer}>
        {renderActiveScreen()}
      </View>

      {/* Floating Spotify Beats Mini-Player */}
      <FloatingMusicPlayer bottomOffset={Math.max(insets.bottom, 10) + 54} />

      {/* Bottom Navigation Bar */}
      <View
        style={[
          styles.tabBar,
          {
            backgroundColor: theme.tabBarBg,
            borderTopColor: theme.tabBarBorder,
            paddingBottom: Math.max(insets.bottom, 10),
          },
        ]}
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <TouchableOpacity
              key={tab.id}
              style={[
                styles.tabItem,
                isActive && {
                  backgroundColor: isDarkMode ? '#281524' : '#FDF2F8',
                  borderRadius: 16,
                },
              ]}
              onPress={() => setActiveTab(tab.id)}
              activeOpacity={0.7}
            >
              <Ionicons
                name={isActive ? tab.iconActive : tab.iconInactive}
                size={22}
                color={isActive ? theme.primary : theme.textSecondary}
              />
              <Text
                style={[
                  styles.tabLabel,
                  {
                    color: isActive ? theme.primary : theme.textSecondary,
                    fontWeight: isActive ? '700' : '500',
                  },
                ]}
                numberOfLines={1}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <HealthProvider>
              <MainAppContent />
            </HealthProvider>
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    paddingTop: 8,
    paddingHorizontal: 8,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 2,
    marginHorizontal: 3,
  },
  tabLabel: {
    fontSize: 10,
    marginTop: 3,
    textAlign: 'center',
  },
});
