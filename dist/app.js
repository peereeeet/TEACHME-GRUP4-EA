"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const profesorController_1 = __importDefault(require("./controller/profesorController"));
const asignaturaController_1 = __importDefault(require("./controller/asignaturaController"));
const app = (0, express_1.default)();
const PORT = 3000;
// Aplica el middleware CORS
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Conexión a MongoDB
mongoose_1.default.connect('mongodb://localhost:27017/ejercicio1')
    .then(() => {
    console.log('Conectado a MongoDB');
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
})
    .catch(err => console.error('No se pudo conectar a MongoDB...', err));
// Rutas
app.use('/api/profesores', profesorController_1.default);
app.use('/api/asignaturas', asignaturaController_1.default);
//# sourceMappingURL=app.js.map