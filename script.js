const updateBorderRadius = ()=>{
    const topLeft = document.getElementById('topLeft').value
    const topRight = document.getElementById('topRight').value
    const bottomRight = document.getElementById('bottomRight').value
    const bottomLeft = document.getElementById('bottomLeft').value

    const previewCode = `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`
    const preview = document.getElementById('preview')
    preview.style.borderRadius = previewCode
    
    const cssCode = document.getElementById('cssCode')
    cssCode.textContent = `border-radius: ` + previewCode
}

const copyCSS = ()=>{
    const cssCode = document.getElementById('cssCode').textContent + ';'
    navigator.clipboard.writeText(cssCode).then(() => {
        let message = document.getElementById("copyMessage");
        message.textContent = "Copied!";
        message.style.opacity = "1";

        // Hide message after 1.5 seconds
        setTimeout(() => {
            message.style.opacity = "0";
        }, 1500);
    });
}

const resetBorderRadius = ()=>{
    const topLeft = document.getElementById('topLeft').value = 20
    const topRight = document.getElementById('topRight').value = 20
    const bottomRight = document.getElementById('bottomRight').value = 20
    const bottomLeft = document.getElementById('bottomLeft').value = 20

    updateBorderRadius()
}

updateBorderRadius()