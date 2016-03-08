$(function(){
	function Adicionar(){
		$("#tblCadastro tbody").append(
			"<tr name='dados' onSubmit='return enviardados();'>"+
			"<td><input id='txtCod' name='txtCod' type='text' placeholder='Digite o código:' title='Código da Mercadoria'/></td>"+
			"<td><input id='txtTipo' name='txtTipo' type='text' placeholder='Digite o tipo:' title='Tipo da Mercadoria'/></td>"+
			"<td><input id='txtNome' type='text' placeholder='Digite o nome:' title='Nome da Mercadoria'/></td>"+
			"<td><input id='txtQtd' type='text' placeholder='Digite a quantidade:' title='Quantidade da Mercadoria'/></td>"+
			"<td><input id='txtPreco' type='text' placeholder='Digite o preço:' title='Preço da Mercadoria'/></td>"+
			"<td><input id='txtNeg' type='text' placeholder='Venda ou Compra' title='Tipo de Negócio: Venda/Compra'/></td>"+
			"<td><img src='images/disk.png' class='btnSalvar'><img src='images/delete.png' class='btnExcluir'/></td>"+
			"</tr>"
			);

		$(".btnSalvar").bind("click", Salvar);     
		$(".btnExcluir").bind("click", Excluir);
	};

	function Salvar(){
		var par = $(this).parent().parent(); //tr
		var tdCodigo = par.children("td:nth-child(1)");
		var tdTipo = par.children("td:nth-child(2)");
		var tdNome = par.children("td:nth-child(3)");
		var tdQuantidade = par.children("td:nth-child(4)");
		var tdPreco = par.children("td:nth-child(5)");
		var tdNegocio = par.children("td:nth-child(6)");
		var tdBotoes = par.children("td:nth-child(7)");

		tdCodigo.html(tdCodigo.children("input[type=text]").val());
		tdTipo.html(tdTipo.children("input[type=text]").val());
		tdNome.html(tdNome.children("input[type=text]").val());
		tdQuantidade.html(tdQuantidade.children("input[type=text]").val());
		tdPreco.html(tdPreco.children("input[type=text]").val());
		tdNegocio.html(tdNegocio.children("input[type=text]").val());
		tdBotoes.html("<img src='images/delete.png'class='btnExcluir'/><img src='images/pencil.png' class='btnEditar'/>");

		$(".btnEditar").bind("click", Editar);
		$(".btnExcluir").bind("click", Excluir);
	};

	function Editar(){
		var par = $(this).parent().parent(); //tr
		var tdCodigo = par.children("td:nth-child(1)");
		var tdTipo = par.children("td:nth-child(2)");
		var tdNome = par.children("td:nth-child(3)");
		var tdQuantidade = par.children("td:nth-child(4)");
		var tdPreco = par.children("td:nth-child(5)");
		var tdNegocio = par.children("td:nth-child(6)");
		var tdBotoes = par.children("td:nth-child(7)");

		tdCodigo.html("<input type='text' id='txtCod' value='"+tdCodigo.html()+"'/>");
		tdTipo.html("<input type='text'id='txtTipo' value='"+tdTipo.html()+"'/>");
		tdNome.html("<input type='text' id='txtNome' value='"+tdNome.html()+"'/>");
		tdQuantidade.html("<input type='text' id='txtQtd' value='"+tdQuantidade.html()+"'/>");
		tdPreco.html("<input type='text'id='txtPreco' value='"+tdPreco.html()+"'/>");
		tdNegocio.html("<input type='text' id='txtNegocio' value='"+tdNegocio.html()+"'/>");
		tdBotoes.html("<img src='images/disk.png' class='btnSalvar'/>");

		$(".btnSalvar").bind("click", Salvar);
		$(".btnEditar").bind("click", Editar);
		$(".btnExcluir").bind("click", Excluir);
	};

	function Excluir(){
	    var par = $(this).parent().parent(); //tr
	    par.remove();
	};

	$(".btnEditar").bind("click", Editar);
	$(".btnExcluir").bind("click", Excluir);
	$("#btnAdicionar").bind("click", Adicionar); 
	
});
