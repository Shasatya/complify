# complify

## /_ Define the scrollbar style _/

.container::-webkit-scrollbar {

width: 10px;

height: 10px;

}

## /_ Define the thumb style _/

.container::-webkit-scrollbar-thumb {

background: linear-gradient(to bottom right, #4d7fff 0%, #1a56ff 100%);

border-radius: 5px;

}

## /_ Define the track style _/

.container::-webkit-scrollbar-track {

background-color: #ddd;

border: 1px solid #ccc;

}

## /_ Define the button style _/

.container::-webkit-scrollbar-button {

background-color: #4d7fff;

border-radius: 5px;

}

## /_ Define the button style when being hovered over _/

.container::-webkit-scrollbar-button:hover {

background-color: #999999;

}
