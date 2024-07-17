import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Color from '../../Global/Color';
import {Iconviewcomponent} from '../../Components/Icontag';

const HomeScreen = () => {
  const categories = [
    {title: 'Good Morning', image: {uri: 'https://via.placeholder.com/60'}},
    {title: 'Morning Exercise', image: {uri: 'https://via.placeholder.com/60'}},
    {
      title: 'Beautify Your Soul',
      image: {uri: 'https://via.placeholder.com/60'},
    },
    {
      title: 'Morning Stretches',
      image: {uri: 'https://via.placeholder.com/60'},
    },
  ];

  const quickActions = [
    {
      title: 'Personal Journaling',
      icon: {uri: 'https://via.placeholder.com/40'},
    },
    {
      title: 'Mindfulness Activities',
      icon: {uri: 'https://via.placeholder.com/40'},
    },
    {title: 'Music Library', icon: {uri: 'https://via.placeholder.com/40'}},
    {title: 'Guided Meditation', icon: {uri: 'https://via.placeholder.com/40'}},
    {
      title: 'Breathing Exercises',
      icon: {uri: 'https://via.placeholder.com/40'},
    },
    {title: 'Practice Yoga', icon: {uri: 'https://via.placeholder.com/40'}},
  ];

  const progressCards = [
    {
      title: 'Guided Meditation',
      description: 'Find your inner peace and practice your meditation',
      image: 'https://via.placeholder.com/60',
      timeLeft: '4 mins left',
    },
    {
      title: 'Guided Meditation',
      description: 'Find your inner peace and practice your meditation',
      image: 'https://via.placeholder.com/60',
      timeLeft: '4 mins left',
    },
  ];

  const quickReads = [
    {
      title: 'My happiest day',
      description:
        'Lorem ipsum dolor sit amet consectetur. Id et eget pulvinar fringilla risus ut elementum. Aenean erat tempor enim facilisis quam. Diam id massa velit et.',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'My happiest day',
      description:
        'Lorem ipsum dolor sit amet consectetur. Id et eget pulvinar fringilla risus ut elementum. Aenean erat tempor enim facilisis quam. Diam id massa velit et.',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'My happiest day',
      description:
        'Lorem ipsum dolor sit amet consectetur. Id et eget pulvinar fringilla risus ut elementum. Aenean erat tempor enim facilisis quam. Diam id massa velit et.',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.greetingSection}>
          <Text style={styles.greeting}>Good morning,</Text>
          <Text style={styles.userName}>Gokul</Text>
        </View>

        <ScrollView horizontal style={styles.categories}>
          {categories.map((item, index) => (
            <View key={index} style={styles.categoryItem}>
              <View style={styles.categoryBorder}>
                <Image source={item.image} style={styles.categoryImage} />
              </View>
              <Text style={styles.categoryTitle}>{item.title}</Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.quickActions}>
          {quickActions.map((action, index) => (
            <TouchableOpacity key={index} style={styles.actionButton}>
              <Image source={action.icon} style={styles.actionIcon} />
              <Text style={styles.actionTitle}>{action.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.moodCheckInSection}>
          <Text style={styles.moodCheckInText}>What's your mood like</Text>
          <Text
            style={{
              fontSize: 26,
              fontWeight: '600',
              color: '#FE9FBB',
            }}>
            Today?
          </Text>
          <TouchableOpacity style={styles.moodCheckInButton}>
            <Text style={styles.moodCheckInButtonText}>Mood Check-in +</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.programCard}>
          <Image
            source={{uri: 'https://via.placeholder.com/300'}}
            style={styles.programImage}
          />
          <View style={styles.programContent}>
            <Text style={styles.programText}>Start a new program now!</Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: '#333',
                marginVertical: 10,
              }}>
              let's roll program now!
            </Text>
            <TouchableOpacity style={styles.programButton}>
              <Text style={styles.programButtonText}>Choose program</Text>
              <Iconviewcomponent
                Icontag={'Ionicons'}
                iconname={'arrow-forward'}
                icon_size={20}
                iconstyle={{color: Color.black, marginHorizontal: 5}}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.progressSection}>
          <Text style={styles.progressSectionTitle}>
            Continue with your progress
          </Text>
          {progressCards.map((card, index) => (
            <View key={index} style={styles.progressCard}>
              <Image source={{uri: card.image}} style={styles.progressImage} />
              <View style={styles.progressText}>
                <Text style={styles.progressTitle}>{card.title}</Text>
                <Text style={styles.progressDescription}>
                  {card.description}
                </Text>
                <Text style={styles.progressTimeLeft} numberOfLines={2}>
                  {card.timeLeft}
                </Text>
                <View style={{marginTop: 10}}>
                  <View
                    style={{
                      width: '100%',
                      backgroundColor: Color.lightgrey,
                      height: 8,
                      borderRadius: 20,
                    }}
                  />
                  <View
                    style={{
                      width: '60%',
                      backgroundColor: '#ff4081',
                      height: 8,
                      borderRadius: 20,
                      position:"absolute"
                    }}
                  />
                </View>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.quickReadsSection}>
          <Text style={styles.quickReadsSectionTitle}>Quick reads</Text>
          <ScrollView horizontal>
            {quickReads.map((card, index) => (
              <View key={index} style={styles.quickReadCard}>
                <Image
                  source={{uri: card.image}}
                  style={styles.quickReadImage}
                />
                <View style={styles.quickReadContent}>
                  <Text style={styles.quickReadTitle}>{card.title}</Text>
                  <Text style={styles.quickReadDescription}>
                    {card.description}
                  </Text>
                  <TouchableOpacity>
                    <Text style={styles.quickReadLink}>Know more</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.quoteSection}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: '#fCA4C1',
            }}>
            Quiet the mind,
          </Text>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: '#FE9FBB',
            }}>
            and the
          </Text>
          <Text style={styles.quoteText}>soul will speak.</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF8F8',
  },
  greetingSection: {
    padding: 20,
    backgroundColor: '#FEF8F8',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 20,
    color: '#333',
  },
  userName: {
    fontSize: 24,
    color: Color.black,
    fontWeight: '600',
  },
  categories: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  categoryBorder: {
    width: 90,
    height: 90,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#ff4081',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  categoryTitle: {
    marginTop: 5,
    fontSize: 12,
    color: '#333',
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 20,
  },
  actionButton: {
    alignItems: 'center',
    width: '30%',
    marginBottom: 20,
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.lightgrey,
    borderRadius: 20,
    padding: 10,
  },
  actionIcon: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  actionTitle: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
    color: Color.black,
  },
  moodCheckInSection: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FEF8F8',
  },
  moodCheckInText: {
    fontSize: 26,
    fontWeight: '600',
    color: '#333',
  },
  moodCheckInButton: {
    marginTop: 10,
    padding: 10,
    paddingHorizontal: 40,
    borderRadius: 100,
    backgroundColor: '#ff4081',
  },
  moodCheckInButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
  programCard: {
    margin: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 30,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  programImage: {
    width: '100%',
    height: 180,
  },
  programContent: {
    padding: 20,
    position: 'absolute',
    right: 0,
    alignItems: 'flex-end',
  },
  programText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  programButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 100,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  programButtonText: {
    fontSize: 18,
    color: Color.black,
    fontWeight: '600',
  },
  progressSection: {
    padding: 20,
    backgroundColor: '#FEF8F8',
  },
  progressSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  progressCard: {
    flexDirection: 'row',
    marginTop: 10,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 20,
    flex: 1,
  },
  progressImage: {
    width: 100,
    height: 120,
    borderRadius: 10,
  },
  progressText: {
    flex: 1,
    marginLeft: 10,
    // justifyContent: 'center',
  },
  progressTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  progressDescription: {
    fontSize: 14,
    color: 'gray',
    marginVertical: 5,
  },
  progressTimeLeft: {
    fontSize: 12,
    color: Color.black,
  },
  quickReadsSection: {
    padding: 20,
    // backgroundColor: '#f8f8f8',
  },
  quickReadsSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
  quickReadCard: {
    width: 250,
    height: 300,
    marginRight: 10,
    borderRadius: 10,
  },
  quickReadImage: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  quickReadContent: {
    padding: 10,
    position: 'absolute',
    bottom: 0,
  },
  quickReadTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  quickReadDescription: {
    fontSize: 14,
    color: 'gray',
    marginVertical: 10,
  },
  quickReadLink: {
    fontSize: 14,
    color: Color.white,
    marginTop: 5,
    textDecorationLine: 'underline',
  },
  quoteSection: {padding: 20, backgroundColor: '#FEF8F8'},
  quoteText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ff4081',
  },
});

export default HomeScreen;
