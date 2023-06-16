# File Uploader

It is a REACT component for user to upload a data file in tabular format (.csv).

## Assumptions

1. The schema is structured dynamically. Assumed that columns x{n} with n < 30000, and row number varies with 10 < r < 1000.
2. A file size is expected minimum 1GB and up to 5GB.
3. Database is default with NoSQL (MongoDB).
4. The component must have a progress bar and estimated time for completion while uploading data. When upload completes, a completion icon is displayed.
5. Before uploading a data file, checking file format is necessary. If the format does not match the criteria of schema, a warning message is shown. An instruction guides user to re-upload a new file in a suitable format.

## UI Design

The UI diagram is designed with Figma (<a href="https://www.figma.com/file/IcajmHdGfN3JzWs2aJtb2l/Genenet-Technology---Upload-Component?type=design&node-id=0%3A1&t=ixck4betCCE0uHJh-1">Link</a>).

<figure>
<img src="./UI_Diagram.jpg"  width="80%" >
<figcaption>Fig. 1 - UI Diagram of File Uploader </figcaption>
</figure>