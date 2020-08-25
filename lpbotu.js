const nextIndex = function(scenery, offset) {
    let numberOfImgs = parseInt(scenery.dataset.imgs, 10)
    let activeIndex = parseInt(scenery.dataset.active, 10)
    let i = (activeIndex + offset + numberOfImgs) % numberOfImgs
    return i
}

const showImageAtIndex = function(scenery, index) {
    scenery.dataset.active = String(index)
    let nextSelector = '#id-image-' + String(index)
    let className = 'jiang-scenery-image-active'
    removeClassAll(className)
    let img = e(nextSelector)
    img.classList.add(className)
}

const showDotAtIndex = function(index) {
    removeClassAll('jiang-dot-active')
    let dotSelector = '#id-dot-' + String(index)
    let dot = e(dotSelector)
    dot.classList.add('jiang-dot-active')
}

const showAtIndex = function(scenery, index) {
    showImageAtIndex(scenery, index)
    showDotAtIndex(index)
}

const bindEventscenery = function() {
    let selector = '.jiang-scenery-button'
    bindAll(selector, 'click', function(event) {
        let self = event.target
        let offset = Number(self.dataset.offset)
        let scenery = self.closest('.jiang-scenery')
        let index = nextIndex(scenery, offset)
        showAtIndex(scenery, index)
    })
}

const bindEventDot = function() {
    let selector = '.jiang-scenery-dot'
    bindAll(selector, 'click', function(event) {
        let self = event.target
        let index = Number(self.dataset.index)
        let scenery = self.closest('.jiang-scenery')
        showAtIndex(scenery, index)
    })
}

const bindEvents = function() {
    bindEventscenery()
    bindEventDot()
}

const playNextImage = function() {
    let scenery = e('.jiang-scenery')
    let index = nextIndex(scenery, 1)
    showAtIndex(scenery, index)
}

const autoPlay = function() {
    let interval = 2000
    setInterval(function() {
        playNextImage()
    }, interval)
}

const demoTimer = function() {
    let clockId = setInterval(function() {
        log('time in interval', new Date())
    }, 2000)
    log('clockId', clockId)
}

const __main = function() {
    bindEvents()
    autoPlay()
    demoTimer()
}
__main()
