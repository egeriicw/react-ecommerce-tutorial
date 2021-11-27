import React, {useState} from 'react';
import axios from 'axios';

const FileUploadForm = () => {
    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    return <div>
                <form>
                    <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.name)}
                    />
                    <input 
                    type="file"
                    value={selectedFile}
                    onChange={(e) => setSelectedFile(e.target.selectedFile)}
                    />
                </form>
            </div>
}

export default FileUploadForm;