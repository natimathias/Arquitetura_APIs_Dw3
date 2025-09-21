export class ContatoService {
  
  // O Service está "amarrado" à implementação do ContatoRepository.
  // Agora o Service RECEBE o repositório. Ele não o cria mais.
  constructor(contatoRepository) {
    this.contatoRepository = contatoRepository;
  }

  // O resto dos métodos permanece EXATAMENTE IGUAL.
  getAllContatos() {
    return this.contatoRepository.findAll();
  }

  getContatoById(id) {
    return this.contatoRepository.findById(id);
  }

  // getContatoByEmail(email){
  //   return this.contatoRepository.findByEmail(email)
  // }

  createContato(contatoData) {
    if(contatoData.lenght < 3){
      return null
    } 
    return this.contatoRepository.create(contatoData);
  }

  updateContato(id, contatoData) {
    return this.contatoRepository.update(id, contatoData);
  }

  deleteContato(id) {
    return this.contatoRepository.remove(id);
  }
}