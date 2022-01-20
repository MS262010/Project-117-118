sketch_data_set = ["Alarm Clock", "Ant", "Apple", "Arm", "Asparagus", "Axe", "Backpack", "Banana", "Baseball Bat", "Basket", "Bed", "Bee", "Belt", "Bicycle", "Binoculars", "Bird", "Birthday Cake", "Book", "Boomerang", "Bowtie", "Bracelet", "Bucket", "Bus", "Bush", "Butterfly", "Cactus", "Cake", "Calculator", "Calendar", "Camel", "Camera", "Camouflage", "Campfire", "Candle", "Car", "Carrot", "Castle", "Cat", "Ceiling fan", "Chair", "Circle", "Clock", "Cloud", "Compass", "Crayon", "Crown", "Cup", "Diamond", "Donut", "Door", "Drums", "Duck", "Ear", "Elbow", "Elephant", "Envelope", "Eye", "Feather", "Fence", "Finger", "Fish", "Flashlight", "Flip Flops", "Floor Lamp", "Flower","Foot", "Fork", "Frog", "Frying Pan", "Garden", "Garden Hose", "Giraffe","golf club", "grapes", "grass", "guitar", "hamburger", "hammer", "hand", "harp", "hat", "headphones", "hedgehog", "helicopter", "helmet", "hexagon", "hockey puck", "hockey stick", "horse", "hospital", "hot air balloon", "hot dog", "hot tub", "hourglass", "house", "house plant", "hurricane", "ice cream", "jacket", "jail", "kangaroo", "key", "keyboard", "knee", "knife", "ladder", "lantern", "laptop", "leaf", "leg", "light bulb", "lighter", "lighthouse", "lightning", "line", "lion", "lipstick", "lobster", "lollipop", "mailbox", "map", "marker", "matches", "megaphone", "mermaid", "microphone", "microwave", "monkey", "moon", "mosquito", "motorbike", "mountain", "mouse", "moustache", "mouth", "mug", "mushroom", "nail", "necklace", "nose", "ocean", "octagon", "octopus", "onion", "oven", "owl", "paintbrush", "paint can", "palm tree", "panda", "pants", "paper clip", "parachute", "parrot", "passport", "peanut", "pear", "peas", "pencil", "penguin", "piano", "pickup truck", "picture frame", "pig", "pillow", "pineapple", "pizza", "pliers", "police car", "pond", "pool", "popsicle", "postcard", "potato", "power outlet", "purse", "rabbit", "raccoon", "radio", "rain", "rainbow", "rake", "remote control", "rhinoceros", "rifle", "river", "roller coaster", "rollerskates", "sailboat", "sandwich", "saw", "saxophone", "school bus", "scissors", "scorpion", "screwdriver", "sea turtle", "see saw", "shark", "sheep", "shoe", "shorts", "shovel", "sink", "skateboard", "skull", "skyscraper", "sleeping bag", "smiley face", "snail", "snake", "snorkel", "snowflake", "snowman", "soccer ball", "sock", "speedboat", "spider", "spoon", "spreadsheet", "square", "squiggle", "squirrel", "stairs", "star", "steak", "stereo", "stethoscope", "stitches", "stop sign", "stove", "strawberry", "streetlight", "string bean", "submarine", "suitcase", "sun", "swan", "sweater", "swingset", "sword", "syringe", "table", "teapot", "teddy-bear", "telephone", "television", "tennis racquet", "tent", "The Eiffel Tower", "toe", "toilet", "tooth", "toothbrush", "toothpaste", "tornado", "traffic light", "tree", "triangle", "truck", "trumpet", "tshirt", "umbrella", "watermelon", "wheel", "windmill", "zigzag"]

random_no = Math.floor((Math.random() * sketch_data_set.length) + 1)
console.log(random_no);
sketch = sketch_data_set[random_no];
document.getElementById("sketch_name").innerHTML = sketch;

timer_counter = 5;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;
temp_counter = 1000;

function setup() {
    canvas = createCanvas(300, 310);
    background("white");
    canvas.position(620, 200);
    canvas.mouseReleased(classifyCanvas);
}
function preload(){
    classifier=ml5.imageClassifier('DoodleNet');
}
function classifyCanvas(){
    classifier.classify(canvas,gotResult);
 }
function draw() {
    check_sketch();
    if (drawn_sketch == sketch) {
        score++;
        document.getElementById("lblScore").innerHTML = score;
        answer_holder = "set";
    }
}
function check_sketch() {
    temp_counter--;
    if (temp_counter <= 0) {
        temp_counter = 1000;
        timer_counter--;
        document.getElementById("time").innerHTML = timer_counter;
    }
    if (timer_counter <= 0) {
        timer_counter = 5;
        document.getElementById("time").innerHTML = timer_counter;
        timer_check = "completed";
    }
    if ((timer_check == "completed" || answer_holder == "set")) {
        timer_check = "";
        answer_holder = "";
        updateCanvas();
    }
}

function updateCanvas() {
    background("white");
    random_no = Math.floor((Math.random() * sketch_data_set.length) + 1)
    console.log(random_no);
    sketch = sketch_data_set[random_no];
    document.getElementById("sketch_name").innerHTML = sketch;
}