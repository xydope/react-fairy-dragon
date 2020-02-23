export const getGrabOffset = ({ currentTarget, clientX, clientY }, rotateAngle = 0) => {
    return {
        left: clientX - currentTarget.getBoundingClientRect().left,
        top: clientY - currentTarget.getBoundingClientRect().top,
    }
}


//top: clientY - currentTarget.getBoundingClientRect().top + Math.PI / 180 * clientX - currentTarget.getBoundingClientRect().left