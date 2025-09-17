export class ContatoController {

  // Agora o Controller RECEBE o serviço.
  constructor(contatoService) {
    this.contatoService = contatoService;
  }

  // O resto dos métodos permanece EXATAMENTE IGUAL.
  async getContatos(request, reply) {
    const contatos = this.contatoService.getAllContatos();
    return reply.send(contatos);
  }
  async getContatoById(request, reply) {
    const { id } = request.params;
    const contato = this.contatoService.getContatoById(id);

    if (!contato) {
      return reply.code(404).send({ message: 'Contato não encontrado' });
    }
    return reply.send(contato);
  }
  async getContatoByEmail(request, reply) {
    const { email } = request.body;
    const contato = this.contatoService.getContatoByEmail(email);

    if (!contato) {
      return reply.code(404).send({ message: 'Email não encontrado' });
    }
    return reply.send(contato);
  }

  async createContato(request, reply) {
    const novoContato = this.contatoService.createContato(request.body);
    if(novoContato === false) {
      return reply.status(400).send("Erro ao cadastrar novo contato" + error)
    }
    return reply.code(201).send(novoContato);
  }

  async updateContato(request, reply) {
    const { id } = request.params;
    const contatoAtualizado = this.contatoService.updateContato(id, request.body);

    if (!contatoAtualizado) {
      return reply.code(404).send({ message: 'Contato não encontrado' });
    }
    return reply.send(contatoAtualizado);
  }

  async deleteContato(request, reply) {
    const { id } = request.params;
    const sucesso = this.contatoService.deleteContato(id);

    if (!sucesso) {
      return reply.code(404).send({ message: 'Contato não encontrado' });
    }
    return reply.code(204).send();
  }
}