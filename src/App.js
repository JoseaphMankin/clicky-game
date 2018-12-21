import React, { Component } from 'react';
import FriendCard from './components/FriendCard';
import Wrapper from './components/Wrapper';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import friends from './friends.json';
import './App.css';

// let correctGuesses = 0;
// let topScore = 0;
// let clickMessage = "Click on an image to earn points, but don't click on any of them more than once!";

class App extends Component {
	// Set this.state
	state = {
		friends,
		clickMessage: "Click on an image to earn points, but don't click on any of them more than once!",
        correctGuesses: 0,
        topScore: 0
	};

  setClicked = id => {

    // Make a copy of the state friends array to work with
    const friends = this.state.friends;

    // Filter for the clicked match
    const clickedMatch = friends.filter(match => match.id === id);

    // If the matched image's clicked value is already true, game over
    if (clickedMatch[0].clicked){
        this.setState({correctGuesses: 0, clickMessage: "Curses! You already clicked on that one! Dracula bids you to try again!"});
        

        for (let i = 0 ; i < friends.length ; i++){
            friends[i].clicked = false;
        }

        this.setState({friends});

    // Otherwise, if clicked = false, and the user hasn't finished
    } else if (this.state.correctGuesses < 11) {

        // Set its value to true
        clickedMatch[0].clicked = true;
        
        // increment the appropriate counter
        this.setState({
            correctGuesses: this.state.correctGuesses + 1, 
            clickMessage: "Nice! You haven't clicked on that one yet! Keep going!"},
            () => {console.log(this.state.correctGuesses, this.state.topScore)
            if (this.state.correctGuesses > this.state.topScore){
                console.log(this.state.correctGuesses, this.state.topScore)
                this.setState({
                    topScore: this.state.correctGuesses
                },
                () => console.log(this.state.correctGuesses, this.state.topScore)
                );
            }
            }
            
            );
        

        

        // Shuffle the array to be rendered in a random order
        friends.sort(function(a, b){return 0.5 - Math.random()});

        // Set this.state.friends equal to the new friends array
        this.setState({ friends });
        // this.setState({correctGuesses});
        // this.setState({clickMessage});
    } else {

        // Set its value to true
        clickedMatch[0].clicked = true;

        // restart the guess counter
        this.setState({
            correctGuesses: 0,
            clickMessage: "NICE!!! You got ALL of them!!! Now, let's see if you can do it again!",
            topScore: 12
        });

        // Egg on the user to play again
        // this.setState({ topScore });
        
        for (let i = 0 ; i < friends.length ; i++){
            friends[i].clicked = false;
        }

        // Shuffle the array to be rendered in a random order
        friends.sort(function(a, b){return 0.5 - Math.random()});

        // Set this.state.friends equal to the new friends array
        this.setState({ friends });
        // this.setState({correctGuesses});
        // this.setState({clickMessage});

    }
};

	

	render() {
		return (
			<div>
				<Navbar score={this.state.correctGuesses} topScore={this.state.topScore} clickMessage={this.state.clickMessage} />
				<Jumbotron />
				<Wrapper>
					{this.state.friends.map(friend => (
						<FriendCard
							id={friend.id}
							key={friend.id}
							name={friend.name}
							image={friend.image}
							setClicked={this.setClicked}
						/>
					))}
				</Wrapper>
			</div>
		);
	}
}

export default App;
