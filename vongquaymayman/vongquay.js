

//Thông số vòng quay
let duration = 2; //Thời gian kết thúc vòng quay
let spins = 3; //Quay nhanh hay chậm 3, 8, 15
let theWheel = new Winwheel({
    'numSegments': 10,     // Chia 8 phần bằng nhau
    'outerRadius': 212,   // Đặt bán kính vòng quay
    'textFontSize': 18,    // Đặt kích thước chữ
    'rotationAngle': 0,     // Đặt góc vòng quay từ 0 đến 360 độ.
    'segments':        // Các thành phần bao gồm màu sắc và văn bản.
        [
            { 'fillStyle': '#eae56f', 'text': '100' },
            { 'fillStyle': '#89f26e', 'text': '200' },
            { 'fillStyle': '#7de6ef', 'text': '300' },
            { 'fillStyle': '#e7706f', 'text': '400' },
            { 'fillStyle': '#eae56f', 'text': '500' },
            { 'fillStyle': '#89f26e', 'text': '600' },
            { 'fillStyle': '#7de6ef', 'text': '700' },
            { 'fillStyle': 'red', 'text': '800' },
            { 'fillStyle': 'green', 'text': '900' },
            { 'fillStyle': 'blue', 'text': '1000' },
        ],
    'animation': {
        'type': 'spinOngoing',
        'duration': duration,
        'spins': spins,
        'callbackSound': playSound,     //Hàm gọi âm thanh khi quay
        'soundTrigger': 'pin',         //Chỉ định chân là để kích hoạt âm thanh
        'callbackFinished': alertPrize,    //Hàm hiển thị kết quả trúng giải thưởng
    },
    'pins':
    {
        'number': 32   //Số lượng chân. Chia đều xung quanh vòng quay.
    }
});

//Kiểm tra vòng quay
let wheelSpinning = false;

//Tạo âm thanh và tải tập tin tick.mp3.
let audio = new Audio('tick.mp3');
function playSound() {
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}

//Hiển thị các nút vòng quay
function statusButton(status) {
    if (status == 1) { //trước khi quay
        document.getElementById('spin_start').classList.remove("hide");
        document.getElementById('spin_stop').classList.add("hide");
        document.getElementById('spin_reset').classList.add("hide");
    } else if (status == 2) { //đang quay
        document.getElementById('spin_start').classList.add("hide");
        document.getElementById('spin_stop').classList.remove("hide");
        document.getElementById('spin_reset').classList.add("hide");
    } else if (status == 3) { //kết quả
        document.getElementById('spin_start').classList.add("hide");
        document.getElementById('spin_stop').classList.add("hide");
        document.getElementById('spin_reset').classList.remove("hide");
    } else {
        alert('Các giá trị của status: 1, 2, 3');
    }
}
statusButton(1);

//startSpin
function startSpin() {
    // Ensure that spinning can't be clicked again while already running.
    if (wheelSpinning == false) {
        //CSS hiển thị button
        statusButton(2);

        //Cấu hình vòng quay
        theWheel.animation = {
            'type': 'spinOngoing',
            'duration': duration,
            'spins': spins,
            'callbackSound': playSound,     //Hàm gọi âm thanh khi quay
            'soundTrigger': 'pin',         //Chỉ định chân là để kích hoạt âm thanh
            'callbackFinished': alertPrize,    //Hàm hiển thị kết quả trúng giải thưởng
        };

        //Hàm bắt đầu quay
        theWheel.startAnimation();
    }
}

//stopSpin
function stopSpin() {
    if (wheelSpinning == false) {
        theWheel.animation = {
            'type': 'spinToStop',
            'duration': (duration + 13),
            'spins': (spins + 1),
            'callbackSound': playSound,     //Hàm gọi âm thanh khi quay
            'soundTrigger': 'pin',         //Chỉ định chân là để kích hoạt âm thanh
            'callbackFinished': alertPrize,    //Hàm hiển thị kết quả trúng giải thưởng
        };

        //Hàm bắt đầu quay
        theWheel.startAnimation();

        //Khóa vòng quay
        wheelSpinning = true;
    }
}

//Result
function alertPrize(indicatedSegment) {
    //CSS hiển thị button
    statusButton(3);

    alert(`Ban duoc ${indicatedSegment.text} diem`);
}

//resetWheel
function resetWheel() {
    //CSS hiển thị button
    statusButton(1);

    theWheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
    theWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
    theWheel.draw();                // Call draw to render changes to the wheel.

    wheelSpinning = false;          // Reset to false to power buttons and spin can be clicked again.
}


