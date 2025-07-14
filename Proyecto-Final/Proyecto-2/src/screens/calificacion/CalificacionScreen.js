import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';

const CalificacionScreen = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <View style={globalStyles.container}>
      <Text style={styles.title}>Califica tu experiencia</Text>

      <View style={styles.starsRow}>
        {[1, 2, 3, 4, 5].map((item) => (
          <TouchableOpacity key={item} onPress={() => handleRating(item)}>
            <Text style={[styles.star, item <= rating && styles.starSelected]}>
              ⭐
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Tu calificación: {rating} estrellas</Text>
    </View>
  );
};

export default CalificacionScreen;

const styles = StyleSheet.create({
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
  starsRow: { flexDirection: 'row', justifyContent: 'center', marginVertical: 20 },
  star: { fontSize: 40, color: '#ccc' },
  starSelected: { color: '#FFD700' },
  label: { textAlign: 'center', fontSize: 18 },
});
