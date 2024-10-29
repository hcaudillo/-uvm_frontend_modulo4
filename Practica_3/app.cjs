/*import { version, command as _command, argv } from 'yargs'*/
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.cjs')

yargs.version('1.1.0')

// Crea Comando Agregar
yargs.command({
    command: 'Agregar',
    describe: 'Agrega una nueva nota',
    builder: {
        title: {
            describe: 'Titulo de la Nota',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Cuerpo de la Nota',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})


// Crea comando borrar
yargs.command({
    command: 'Borrar',
    describe: 'Borrar una nota',
    builder: {
        title: {
            describe: 'Titulo de la Nota',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Crea comando lisstar
yargs.command({
    command: 'Listar',
    describe: 'Lista las notas',
    handler() {
        notes.listNotes()
    }
})

// Crea comando leer
yargs.command({
    command: 'Leer',
    describe: 'Lee una nota',
    builder: {
        title: {
            describe: 'Titulo de la Nota',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse();