window.onload = () => {
  const numberColumn = document.querySelector('.index');
  const markers = document.querySelectorAll('.marker');
  const columnOffset = numberColumn.getBoundingClientRect().top; // Get the offset of the index column

  markers.forEach((marker) => {
    const markerRect = marker.getBoundingClientRect();

    // Debugging: Log the position to ensure it's working
    console.log(`Marker ${marker.id}:`, markerRect);

    const markerId = marker.id.split('_');
    const partNumber = markerId[1];

    // Create a new number element
    const numberElement = document.createElement('p');
    numberElement.className = 'number-tag';
    numberElement.innerText = partNumber;

    // Calculate the position relative to the index column
    const topPosition = markerRect.top - columnOffset; // Adjust for scrolling

    // Set the top position for the number element
    numberElement.style.top = `${topPosition}px`;

    // Append number element to the number column
    numberColumn.appendChild(numberElement);
  });
};
